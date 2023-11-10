report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document.png",
        "test": "../bitmaps_test/20231110-134559/Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/hello-world/",
        "expect": 0,
        "viewportLabel": "custom-size",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -32,
            "height": -130
          },
          "rawMisMatchPercentage": 23.869731800766285,
          "misMatchPercentage": "23.87",
          "analysisTime": 16
        },
        "diffImage": "../bitmaps_test/20231110-134559/failed_diff_Entire_document.png"
      },
      "status": "fail"
    }
  ]
});