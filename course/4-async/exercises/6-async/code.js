async function getItemData() {
  const response = await fetch(
    "https://api.boot.dev/v1/courses_rest_api/learn-http/items",
    getSettings()
  );
  const responseJSON = await response.json();
  return responseJSON;
}

// don't touch below this line

const items = await getItemData();

logItems(items);

function getSettings() {
  return {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": "Testing",
      "Content-Type": "application/json",
    },
  };
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name);
  }
}
