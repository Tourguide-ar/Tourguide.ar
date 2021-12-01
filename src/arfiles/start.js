window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

// INSERT LOCATION INFORMATION HERE
function staticLoadPlaces() {
  return [
    {
      name: "Office",
      location: {
        // Wheatley1: 51.748879, -1.127400
        // Orig: 54.973183, -1.624139
        lat: 51.748879,
        lng: -1.1274,
      },
    },
    {
      name: "River God",
      location: {
        // Wheatley2: 51.748849, -1.127171
        // Orig: 54.970324, -1.600658
        lat: 51.748849,
        lng: -1.127171,
      },
    },
  ];
}

// Populate a-scene in A-Frame HTML
function renderPlaces(places) {
  // create assets section
  let scene = document.querySelector("a-scene");
  let assets = document.createElement("a-assets");
  let assetItem1 = document.createElement("a-asset-item");
  let assetItem2 = document.createElement("a-asset-item");

  // if session storage has been set
  if (window.sessionStorage.getItem("earthmtl") != null) {
    // read mtl string from session storage and save as file
    const mtlStr = window.sessionStorage.getItem("earthmtl");
    let mtlSeq = [];
    mtlSeq.push(mtlStr);
    const mtlFile = new File(mtlSeq, "Earth.mtl", { type: "text/plain" });
    assetItem2.setAttribute("src", URL.createObjectURL(mtlFile));
  }

  if (window.sessionStorage.getItem("earthobj") != null) {
    // read obj string from session storage and save as file
    const oStr = window.sessionStorage.getItem("earthobj");
    let oSeq = [];
    oSeq.push(oStr);
    const oFile = new File(oSeq, "o.obj", { type: "text/plain" });
    assetItem1.setAttribute("src", URL.createObjectURL(oFile));
  }

  // if session storage has failed to be set for some reason
  if (window.sessionStorage.getItem("earthmtl") === null) {
    assetItem2.setAttribute("src", "../ARModels/piratePack/earth.mtl");
  }

  if (window.sessionStorage.getItem("earthobj") === null) {
    assetItem1.setAttribute("src", "../ARModels/piratePack/earth.obj");
  }

  assetItem1.setAttribute("id", "obj");
  assetItem1.setAttribute("crossOrigin", "anonymous");

  assetItem2.setAttribute("id", "mtl");
  assetItem2.setAttribute("crossOrigin", "anonymous");

  assets.appendChild(assetItem1);
  assets.appendChild(assetItem2);
  scene.appendChild(assets);

  // create entity section
  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement("a-entity");
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );

    model.setAttribute("obj-model", "obj: #obj; mtl: #mtl");
    model.setAttribute("rotation", "0 310 0");

    model.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
  });
}
