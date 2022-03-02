'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5eb5670a36e3bc33906926d878ea4b8e",
"index.html": "c814bb0ec49bf17ea064d158b156e7cb",
"/": "c814bb0ec49bf17ea064d158b156e7cb",
"main.dart.js": "cb0e60e5cd452149677e1d514b37e03f",
"README.md": "19a55c7f25c21628dee7176e194b66c2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"lid.js": "1ca9618718d382941ae12d47804c3045",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6c141fae42a837302c523b2df9ac1215",
".git/ORIG_HEAD": "8df04cb6d74059c97e24e2ca2857dd19",
".git/config": "f89540f0ce4afa6147591aa319a96d4f",
".git/objects/61/9f8834c2caf49d1b3159a28a7ff2a8652ab80d": "e4eaaa8ed73244ad1472920688c5be14",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/03/12c7835f2358177b6a0c1afedbd96ed615b828": "18e63db87b67250896bffee9c3bd9b16",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/3c/7abeb3835f8e68410ef22db0c73313fd5c33bb": "966556f5b4c520cab7e7f925f57ec096",
".git/objects/58/5852fb5c0ccbebf07c675d4abcc8af1683b512": "cbd75a66d149e63d4cc7aeafca188caf",
".git/objects/0e/a1dd51b12e5e362d7359ff55487f73988a92b6": "03b1c06ac72f01da97da02099876a851",
".git/objects/5a/14ae4c7cd62fa9c7cec409a215cd23b28ec9d4": "514af9f2d968831671971ddcdcaf6c53",
".git/objects/a3/90345576d7617cd4b21be3e1d11d53f117e6d9": "9b990580524095372c9e4ef550ec2b35",
".git/objects/d0/16a1224a0744481ab679d76e2cc1d3f5792292": "e97ce799ed17fd380c4740475cf44d3f",
".git/objects/b3/6037b07a08f6e3d5f610a45770d9acf686113e": "1781fb0ca9c2e4e017565eb8247b6ec4",
".git/objects/df/3bf837e3d36c04ba92f12f0bd529e77f6818f0": "8eaf2f69026acc217ee543c0e8566be2",
".git/objects/d1/b881577578d4b8f0d98bd93de9a5e994f34251": "405a6a93904545beb6200810dab99bb1",
".git/objects/d1/18efcaf31ebb37b5ba01eb68235d62a4f67009": "22130aca0b0831a3ddb36507c3375a7b",
".git/objects/ae/4436e546d39f5b4abb8074081ae9113cee933a": "3ad98b807133b80b45eff2ffc6422536",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/ee/2d5c21d6fd634c4c1ea47903ab1137d094b335": "044d22da157c8909fc36d3f02dbaad42",
".git/objects/fe/2fe72be7af9ca1a9f852d822967315c448aa5e": "6365f705b7d73f442e6e5c3871253fdb",
".git/objects/c8/4a1fe9b756a502059e86df84818e454a58527e": "9d1a7e5bd536583eaa6ba577f67373b5",
".git/objects/c1/6bf73fe89adfbad1a91a98f6bbfbc3bd7ea9d6": "97e214b89fcdfa71e9c748f6ac63ea4d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/33ab3eec7da854b66190cf15547bf7ef1385c7": "266d26181758d9692ed0bf8c34432029",
".git/objects/pack/pack-834abff1004bb563202dd15bd97e10ca9eea34fd.pack": "0df93c6e825e70d7bee62dc296643d57",
".git/objects/pack/pack-834abff1004bb563202dd15bd97e10ca9eea34fd.idx": "9a686af54df2be8e0bba6d60a093a1a2",
".git/objects/89/152e6765ca7c588db6f62e1952c4a51a246d50": "23bedb80f7ee4adae59e10aac13900ab",
".git/objects/80/355e79a8f6f4889a770533e10ca124e015568a": "f656e134d8440d68ad649024c3e1a7e9",
".git/objects/1a/56dd640d64738263a0fc9cfc59d81e7b3e700c": "90be8daa525a08bf4840d3699c0e6332",
".git/objects/81/a1c627910ad440bb10365031539e19d6be5571": "46d1177aae8a0eeeff3e1f2f360ef388",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/9f/1ceca993be8811c7c65e956538eb494dd9b8c4": "23ed23a3c693b2c4e6918d16c5b1e386",
".git/objects/9a/82aff22aab62d12360f35723f6f2cad85d0016": "798894113fcf7a61bc36337b6a1bb8ab",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/98/8d628ef2f4344e492124e3f365c6831e6bb1e6": "95c9e58a4344712047411a72ad812b3c",
".git/objects/39/f89ae89635680ca086fbc2fd6d67f3a107c09a": "4963dc193eb82ec75b21131d0bb0aeaf",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0a/45dbaf9ef59eada462fbd568c7680013b41093": "25110b1b965e2b0554ee516cc79a6986",
".git/objects/a0/4687f326be318e8499d18a77ed80a22ba5704e": "e01bcb0ac5cd4a68cf9ecb77bb6de166",
".git/objects/b8/9dfaf1df9f4118351b094ec5991d687c1b48c3": "3b1bd25a9664b7a02a14530afab5f289",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/87dfda97c0b6da1d04ebedda5e2e4fbaa88fe2": "c52a0b6db43b9c51987f5fae2569235f",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/ecffd273169a39f01e3f6897c98bc59dcd75fc": "f6d9bc21f87a1d95adfb060d1bb8112e",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/54ddfdb0b19b2cb84dcec441fd1da8f3b2b65c": "b7cd7015ab39f07d7e9caa251237339c",
".git/objects/13/715b8efce2d4572be6d9996ece1b29bc54866a": "889fef86a169461ad922597dc725a336",
".git/objects/7a/a1c6ee95a364e4503375c2243086b2d8383474": "079862cd18e26209b948de05fe9992c5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d23fa6d05ef51c7b6b66590fbdcbc764",
".git/logs/refs/heads/main": "ea4eca3ba9574cbcdf208c03faa72606",
".git/logs/refs/remotes/origin/HEAD": "c9a31e91625c6827d71f73e083f5cf35",
".git/logs/refs/remotes/origin/main": "f1f8b5405da22bfab8b5398d494bfee2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7a20a079bd7af2babce32b8a0d035e20",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7a20a079bd7af2babce32b8a0d035e20",
".git/index": "ff0f1fcbff6d07b13beb485c352500f0",
".git/packed-refs": "98c7c18524111177ac8645fb6b2554d3",
".git/COMMIT_EDITMSG": "64241c092348a61f226cfc7e09fef2d8",
".git/FETCH_HEAD": "98e4dcd6950cffa08d61bcc0abe6a8cc",
"assets/AssetManifest.json": "b39ab8daf59bf3adf1efc310ce844d63",
"assets/NOTICES": "f78f466526c656b4b26ba87bd57f23ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
