{
  "manifest_version": 1,

  "name": "Imageless",
  "description": "This extension blocks images on your browser.",
  "version": "1.0",
  "author": "MacroGrove",

  "icons": {
    "48": "icon38.png"
  }, 
  "browser_action": {
        "default_title": "Imageless",
        "default_icon": {
          "19":"icon20.png",
          "20":"icon20.png",
          "38":"icon38.png"
        },  
    "default_popup": "dashboard.html"
  },
    "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["imageless.client.js"],
      "run_at": "document_start"
    }
  ],
  "permissions": [
    "activeTab"
  ]
}
