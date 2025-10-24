<?php
// This script simulates proper REST routes and uses data.json to store the data.
// It intentionally avoids using the database to minimize required setup.
// This is meant for educational purposes only - to have a server backend to use while
// learning the JavaScript fetch() API.

header("Content-Type: application/json");

$file = "products.json";

// Load current data
$products = json_decode(file_get_contents($file), true) ?? [];

// Get method and path
$method = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];
$pathParts = explode('/', trim(parse_url($requestUri, PHP_URL_PATH), '/'));
$id = isset($pathParts[3]) && is_numeric($pathParts[3]) ? intval($pathParts[3]) : null;

function findIndexById($id, $products) {
    foreach ($products as $index => $p) {
        if ($p["id"] == $id) return $index;
    }
    return -1;
}

$input = json_decode(file_get_contents("php://input"), true);

switch ($method) {
    case "GET":
        if ($id) {
            $index = findIndexById($id, $products);
            if ($index >= 0) {
                echo json_encode($products[$index]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Product not found"]);
            }
        } else {
            echo json_encode($products);
        }
        break;

    case "POST":
        if ($id) {
            // Update existing product
            $index = findIndexById($id, $products);
            if ($index < 0) {
                http_response_code(404);
                echo json_encode(["error" => "Product not found"]);
                exit;
            }
            $products[$index] = array_merge($products[$index], $input ?? []);
            file_put_contents($file, json_encode($products, JSON_PRETTY_PRINT));
            echo json_encode($products[$index]);
        } else {
            // Create new product
            $newProduct = [
                "id" => count($products) ? max(array_column($products, 'id')) + 1 : 1,
                "name" => $input["name"] ?? "Unnamed",
                "price" => floatval($input["price"] ?? 0)
            ];
            $products[] = $newProduct;
            file_put_contents($file, json_encode($products, JSON_PRETTY_PRINT));
            http_response_code(201);
            echo json_encode($newProduct);
        }
        break;

    case "PUT":
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "Missing product ID"]);
            exit;
        }
        $index = findIndexById($id, $products);
        if ($index < 0) {
            http_response_code(404);
            echo json_encode(["error" => "Product not found"]);
            exit;
        }
        $products[$index] = array_merge($products[$index], $input ?? []);
        file_put_contents($file, json_encode($products, JSON_PRETTY_PRINT));
        echo json_encode($products[$index]);
        break;

    case "DELETE":
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "Missing product ID"]);
            exit;
        }
        $index = findIndexById($id, $products);
        if ($index < 0) {
            http_response_code(404);
            echo json_encode(["error" => "Product not found"]);
            exit;
        }
        array_splice($products, $index, 1);
        file_put_contents($file, json_encode($products, JSON_PRETTY_PRINT));
        echo json_encode(["message" => "Product deleted", "id" => $id]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
}
?>