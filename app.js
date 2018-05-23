require.config({
  baseUrl: "js",

  paths: {
    "jquery": "../lib/jquery-3.3.1.min"
  }
})

requirejs(["main"])
