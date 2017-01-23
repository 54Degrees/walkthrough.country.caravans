var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining",
      "name": "Dining",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5213659485701001,
        "pitch": 0.43541893677618404,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.017722433975667,
          "pitch": 0.4843153301921159,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 0.12247341224279396,
          "pitch": 0.5047873685613933,
          "rotation": 0,
          "target": "3-sittingroom"
        },
        {
          "yaw": 0.059991970516357185,
          "pitch": -0.19830174210157736,
          "rotation": 0,
          "target": "4-mezzanine-bedroom"
        },
        {
          "yaw": 3.055544243014838,
          "pitch": -0.36662537081516433,
          "rotation": 0,
          "target": "5-mezzanine-playroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.29135155949504643,
        "pitch": 0.3876428618843484,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15614241462641942,
          "pitch": 0.5092835105720113,
          "rotation": 0,
          "target": "0-dining"
        },
        {
          "yaw": -0.9066315144733466,
          "pitch": 0.9578603561467673,
          "rotation": 0,
          "target": "2-toilet-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-toilet-shower",
      "name": "Toilet Shower",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.166625886958137,
        "pitch": 0.4874391564312113,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7644536288686359,
          "pitch": 0.8510454960120821,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sittingroom",
      "name": "Sittingroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5327774458365901,
        "pitch": 0.4870364785069654,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2668220279896936,
          "pitch": 0.4013099574479355,
          "rotation": 0,
          "target": "0-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-mezzanine-bedroom",
      "name": "Mezzanine Bedroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9822402002962676,
        "pitch": 0.5000031117058974,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4877647970885457,
          "pitch": 0.09172441842444812,
          "rotation": 0,
          "target": "5-mezzanine-playroom"
        },
        {
          "yaw": 1.7546202902834782,
          "pitch": 0.812336312537898,
          "rotation": 0,
          "target": "0-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-mezzanine-playroom",
      "name": "Mezzanine Playroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8068924075913273,
        "pitch": 0.424234519330307,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9541099481018973,
          "pitch": 0.053633393148121655,
          "rotation": 0,
          "target": "4-mezzanine-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Country Caravans",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
