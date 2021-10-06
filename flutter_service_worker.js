'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8034f81d4b54f4f186e458a6afd4e270",
"index.html": "ed394eb695ee006b7207cb4735ee5867",
"/": "ed394eb695ee006b7207cb4735ee5867",
"main.dart.js": "ae9607416eff3610994a1a12997c136d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0c2693028c6c9aced2b15a8742740210",
".git/config": "589f6c893551b10742ddcf3a59226875",
".git/objects/66/44035b00019a74e9d12c1d882d07e48dac37c2": "6a4e61e4bc4cc1fb6ef7eb8392b24ab4",
".git/objects/66/d12acb28f60e0f69d0cde423e0c1a0d7f61cf1": "7632c5bda1371edb2d629e50e5a06d63",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/849b18029f532b0b7767f5c4ccf3d377cb1a3e": "9e9d43d4c0cfeef788902cbb990db335",
".git/objects/9d/2a46fcbc79014d99f66a21ebbde7016041e06a": "0933791bdf830110bd84918c495baa9e",
".git/objects/ad/efb073739aafb142e94b85442de74d5ada3ce1": "edcd1e3a1ea09d0021b4006f9209cc61",
".git/objects/be/95a3f11303dce159ba3c5e153f6a38961840e9": "be7919a8892b50d4c4934bb0b01de216",
".git/objects/a5/b01d6df558b8fed5270b5ed17f53974ed0c2b4": "190e5f52f05af366cabaf61b9cd35b6c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/609b44d60d78fc85adeadbced24ca7cef660a9": "2b4ea6156b4bfa2e41ae9c6b44367948",
".git/objects/fd/c2327f07f6df58b046ccf7577499642f8b3a26": "e3f45585a17d7d7938ba49e38c001e16",
".git/objects/e4/8179886f505a422e4da49bf42ffabd829ee158": "5e2d27dc85346ef3141fa892e232cbd1",
".git/objects/c8/d143022cf1bc76ccb110ab6165433b1dfd0806": "f9c87f1b11855fc9ba3011868a9c6666",
".git/objects/ed/296f1dd3ab5603a0713058520735f9930fd9fb": "7208d80cbd2c049e2cd9ac701b6323ba",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/5b3590b762fefd4043923d85438addcbaf3003": "85cae2152862b0f3814f70d868d6c925",
".git/objects/42/c30c7ed0c89cced75a3906b1b883c3170b1db2": "66ba5a690e0dd6333f2bab7fb827440d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/2a62f5f81233afe2b63d3480879fa43a3a1834": "320af26542e7043d6e0c32e5d983864b",
".git/objects/72/be2f36404ddad1d42251c63ddf3a3d28160e85": "526ab9d1c104a24bcb1000ff57011d41",
".git/objects/2f/1874ca8355843b9309eb1f2e68e95e0faf9eb2": "7d094afacfcd05e009c50f84a0d1c821",
".git/objects/43/a045eecbf3ab8d099e2dc2210f566d5ee193a1": "605baf4925b36e8cb2a2e9f314175b78",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8f04374fefaf3305db21c4af23b23befb8332f": "e486c84e09c58de2d4cbb6efb0eafe5f",
".git/objects/6b/27f825397587f9e289ec85efa704e336d70d6a": "196ff1418acbf4d5c61e1ae83f9ad01c",
".git/objects/30/1963a6a3161ffba40c0d31495e32790ff7cd7c": "9ee48cc289bd2f58f5f1b9a19ba5615d",
".git/objects/39/1ec743673d92f922f5d9a9d91a12bfc44219e5": "0dd3e2e443ce37fcc4b95979e108a7e9",
".git/objects/99/dc6403b33ace975a643499304c6ce21fa3ba61": "d7247a4cd84023fbc7d189543f19549f",
".git/objects/a0/1ea73621ef737e5e889bfec60618126df97b6f": "c133632da78db1504f6b1edbc503f353",
".git/objects/b1/a19b98fa82b70c6e2ca5ae82f639d4a8e786d0": "46a29fcb6fe0fae322969b5e14035147",
".git/objects/aa/9df33e78850e7caf5ebb80180f1ee26b3855c3": "fbdcbee6c0daba7e74394d5477079bde",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/930f3911a4b88ff8c010c84be236e8e92423c5": "ed3c9032e93c23dbfdca3a2e86eecfb4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/9aaef2a6db6b859375c28edfbe34f77e18b2f1": "cd557852ef3ad35330aca5cd11fe08b4",
".git/objects/c4/c47c93c0aa83e75ebf66762b4e8da781aca0b7": "71728fc2588b1fd972334441ee72695a",
".git/objects/e1/a858e0164712aae9fae02170ddf5daee52fce3": "616a1ac998c0eac72364e57270407d72",
".git/objects/fa/1b65ac4b7bc2fc6dcfcccfd91d12a60818da30": "7e212439ac076fcb3cc2b0d990061dc2",
".git/objects/fa/8bccbef1950eeacd6c02848c04072270b29b51": "967a5aba3ead12ad8c0fe62019c3cd05",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e4aec9b6d39bc49d384a101716b70bc4266bf4": "1b6970078a74ada40489126bee0da482",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/6d3371b8ea6ea8210b4dfd6492dbbf85461579": "34720e28e87cd170b57eb467e1f8e6f0",
".git/objects/12/0628890942fd5db86dd10c1b720d22252f8f48": "f7461e06131464403ada61bc32edf439",
".git/objects/71/458fb36e9db2504d68a35129379863a0ecc4ad": "042b8a9c0d4f3afeb58d6887b8420f50",
".git/objects/14/73a5c1ffbfe83ed31d8dfc6a2898a05644c1a3": "3693543713b4b258a884f695046fa511",
".git/objects/14/179fae7f1d3ca6a43a03124b8ac1f6b5773f3e": "4510243a24bc4a399c295a6b468c94f9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8bf3e8ac539e449034f167796d6319ca",
".git/logs/refs/heads/main": "decc80b0daf18beb052b4beb24b57b93",
".git/logs/refs/remotes/origin/main": "b042c85d7cffea939867765cdd74eccc",
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
".git/refs/heads/main": "64bad9483e5a85b5140ec7e4a267af3a",
".git/refs/remotes/origin/main": "64bad9483e5a85b5140ec7e4a267af3a",
".git/index": "996d5219963014a9248314719e3b5401",
".git/COMMIT_EDITMSG": "1f7c221e747295d5c71c6eab0fe44911",
".git/FETCH_HEAD": "ac06efddf4ec53e656e0e9604e5b641a",
"assets/AssetManifest.json": "aee48df95901025000df6878520a7b39",
"assets/NOTICES": "47ba2c90b6782e8b04ffb1c336e07b25",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/logo.png": "8ee2afe506ef8138bad53952ef43a77d"
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
