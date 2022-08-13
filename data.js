var APP_DATA = {
  "scenes": [
    {
      "id": "0-lounge-bar",
      "name": "Lounge Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.0485185496805283,
        "pitch": -0.011823119062917442,
        "fov": 1.9023398572240051
      },
      "linkHotspots": [
        {
          "yaw": 0.5847243366213952,
          "pitch": -0.04519047434038548,
          "rotation": 0,
          "target": "1-toilet"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8657914418785584,
          "pitch": -0.01189134568164718,
          "title": "Damage Area",
          "text": "Remove all items&nbsp;"
        },
        {
          "yaw": 2.2579234302368665,
          "pitch": -0.06955892815884823,
          "title": "Bar Area",
          "text": "Remove all items"
        }
      ]
    },
    {
      "id": "1-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
