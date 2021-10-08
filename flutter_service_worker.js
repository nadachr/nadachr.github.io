'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8034f81d4b54f4f186e458a6afd4e270",
"index.html": "2a799e83ddb5e4e1f35db82e4eaf00ce",
"/": "2a799e83ddb5e4e1f35db82e4eaf00ce",
"main.dart.js": "347586a31788ffcf7840287ad388f093",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "8f08e10d691dd4cea07bc6b29b4af5ac",
"icons/favicon.ico": "d0b873bfaf598697649a01466ba8024a",
"icons/apple-icon.png": "7d301b67c4969842b994a1309117b424",
"icons/apple-icon-144x144.png": "f611555174cf429a9d1ffc0ca1d78ae6",
"icons/android-icon-192x192.png": "62d7e0868e0a716123327dd5100c515e",
"icons/apple-icon-precomposed.png": "7d301b67c4969842b994a1309117b424",
"icons/apple-icon-114x114.png": "e8e884b5f59a8c2ce2632cb0d62297b4",
"icons/ms-icon-310x310.png": "d6396c2b75e8b2b8808e1fd06979533d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/ms-icon-144x144.png": "f611555174cf429a9d1ffc0ca1d78ae6",
"icons/apple-icon-57x57.png": "ac6f9956251a8224f992dc4f811620b7",
"icons/apple-icon-152x152.png": "8a3e94a8e0fab655a5e0b43ff1e751c1",
"icons/ms-icon-150x150.png": "61c5f3738db8030851d552db3c380946",
"icons/android-icon-72x72.png": "ef1bb7d591c719f777064eb7cec702e2",
"icons/android-icon-96x96.png": "613323433defb9a05ffb485ab321f3c6",
"icons/android-icon-36x36.png": "ec8e5fc8853210deaa43c8f37cb29726",
"icons/apple-icon-180x180.png": "fd0be966aa7fccd27530a3c7d37f7d66",
"icons/favicon-96x96.png": "613323433defb9a05ffb485ab321f3c6",
"icons/manifest.json": "e58c51d55afa997be4f9e28f4ff6c480",
"icons/android-icon-48x48.png": "30df14817433180d09ac9b626d1f4b66",
"icons/apple-icon-76x76.png": "3334c277415ad1a17c8226b802b3b6da",
"icons/apple-icon-60x60.png": "cc09abdd444f5891e2b657948e449c79",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "f611555174cf429a9d1ffc0ca1d78ae6",
"icons/apple-icon-72x72.png": "ef1bb7d591c719f777064eb7cec702e2",
"icons/apple-icon-120x120.png": "50c766dc7f69ceee98ab8cf17181b580",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "6a1633b27f4d2c33f292ef8522967e80",
"icons/ms-icon-70x70.png": "effba83e27252f80f52bee93e20c0065",
"manifest.json": "0c2693028c6c9aced2b15a8742740210",
".git/config": "589f6c893551b10742ddcf3a59226875",
".git/objects/0c/b93212628126b8c7106e38cdf989cbb76707eb": "d786bc49a5e7ffa9ad4c381f0fae9373",
".git/objects/66/44035b00019a74e9d12c1d882d07e48dac37c2": "6a4e61e4bc4cc1fb6ef7eb8392b24ab4",
".git/objects/66/d12acb28f60e0f69d0cde423e0c1a0d7f61cf1": "7632c5bda1371edb2d629e50e5a06d63",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/849b18029f532b0b7767f5c4ccf3d377cb1a3e": "9e9d43d4c0cfeef788902cbb990db335",
".git/objects/56/9770f358157a20d62ee52e1727a9b9fba2002e": "b8c0c2607a31c4bae458d667ff8e4d22",
".git/objects/9d/2a46fcbc79014d99f66a21ebbde7016041e06a": "0933791bdf830110bd84918c495baa9e",
".git/objects/a4/201dfe87c0d104b5614d1466c30ea2929b0462": "ef440fac9ab5975af38fe17ef1bdcac1",
".git/objects/b5/a829690aa4c3d357fc52a821467f147499f97e": "2a597805d18081d518504f003384ff65",
".git/objects/ad/efb073739aafb142e94b85442de74d5ada3ce1": "edcd1e3a1ea09d0021b4006f9209cc61",
".git/objects/ad/1ca559eedd4b73a3b70f170a2427d7ff90694b": "a9ae970885aaab70149d10bf71cbba4d",
".git/objects/d7/f9f18cf31ef12a266a142c4dde0149a2ca1b94": "c7fcdb2aeff64523d073ffb7669eb8b8",
".git/objects/be/95a3f11303dce159ba3c5e153f6a38961840e9": "be7919a8892b50d4c4934bb0b01de216",
".git/objects/df/e6456d0ec5a55e73a34106d15b2ed0e07d821a": "67b98eeb27d494cb582039b9a70f2c2a",
".git/objects/a5/b01d6df558b8fed5270b5ed17f53974ed0c2b4": "190e5f52f05af366cabaf61b9cd35b6c",
".git/objects/a5/7de3c9f4b8486e3ea5b29b450583abf1d31f1e": "7bba00df52903f2b1c187f6a4450b726",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/29c4661325d0600b3570c6898739e10b9d7263": "a42158c85905314c5e05c34069a9c2c2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c9/da7b8dc914f2a4957cee7ef1293bd2dc5efe5b": "8af61080408856d76be15899cafe0559",
".git/objects/fc/609b44d60d78fc85adeadbced24ca7cef660a9": "2b4ea6156b4bfa2e41ae9c6b44367948",
".git/objects/fd/9f0b4f967d8b93075060ab82122d48e8d9095e": "9aac30a26189a247c51c4d2f75bde08a",
".git/objects/fd/c2327f07f6df58b046ccf7577499642f8b3a26": "e3f45585a17d7d7938ba49e38c001e16",
".git/objects/f5/ee525bb651cb2b815edfe75ea71f85e2a7f86f": "6d3b92cce5ab9e9a86413d040605a1bc",
".git/objects/e4/8179886f505a422e4da49bf42ffabd829ee158": "5e2d27dc85346ef3141fa892e232cbd1",
".git/objects/c8/d143022cf1bc76ccb110ab6165433b1dfd0806": "f9c87f1b11855fc9ba3011868a9c6666",
".git/objects/ed/296f1dd3ab5603a0713058520735f9930fd9fb": "7208d80cbd2c049e2cd9ac701b6323ba",
".git/objects/4e/669beb635a91a610a7f3daa0e8acf05f26240e": "864ef03f359af0c7af95a60deb9d74ad",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/5b3590b762fefd4043923d85438addcbaf3003": "85cae2152862b0f3814f70d868d6c925",
".git/objects/29/7fa1ef41b0f25ad49556244a5a7303540fb916": "3fccc74b3658b99704d914bb9cd9b350",
".git/objects/42/c30c7ed0c89cced75a3906b1b883c3170b1db2": "66ba5a690e0dd6333f2bab7fb827440d",
".git/objects/87/1348a0b40e406bce17029f56c2431c1e837b0e": "e92f3ac8e87352c6e8adfdc5118f0ed3",
".git/objects/1a/45e85ee0423830c999a4ce912b846324c171ba": "ab42f6705ff0020f0dc6b3730629105c",
".git/objects/28/d7a75fa78a481920b1ac619d47eeb9989eff3c": "b4c08ae0cebaff0feb70c801db6279af",
".git/objects/8f/2fca189be1962540d5c2faae12a509de2bb436": "b5cc020c59b86ef6ef0fc67c415343b9",
".git/objects/8a/bbe2c8b1a60a25e793337b7f1d40de6bf62e97": "2c10bf4c218956361612f1a90e1403fc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/5d9921ad3ea753066210544002c7ca98bb3fb5": "2248a8b7b4cb3aa6237e003d8fb21c70",
".git/objects/19/df4cf0ccf085d2897691f27cf1db9ff856600b": "e07ae88232b4dd55da4a21829f0625e0",
".git/objects/81/3ac7b56970fd7d40e0c6d1a113ba05e4318800": "aee2eab680c93bc7f9a5e68475686efb",
".git/objects/86/2a62f5f81233afe2b63d3480879fa43a3a1834": "320af26542e7043d6e0c32e5d983864b",
".git/objects/86/eb1e259c93e83d731e4ed41e57c556ef6aa81f": "28acfad36347acd346daf4dffe318337",
".git/objects/72/be2f36404ddad1d42251c63ddf3a3d28160e85": "526ab9d1c104a24bcb1000ff57011d41",
".git/objects/2a/46f962392de053ea0efc503383dbfaf2c25a26": "80f61cf5a8c219bdedf9b49af6e9439e",
".git/objects/2f/1874ca8355843b9309eb1f2e68e95e0faf9eb2": "7d094afacfcd05e009c50f84a0d1c821",
".git/objects/43/822e47022139f5b6bdc52bad45514471127b6c": "c5781ab849d1bf9746f767ea02396480",
".git/objects/43/a045eecbf3ab8d099e2dc2210f566d5ee193a1": "605baf4925b36e8cb2a2e9f314175b78",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8f04374fefaf3305db21c4af23b23befb8332f": "e486c84e09c58de2d4cbb6efb0eafe5f",
".git/objects/6b/27f825397587f9e289ec85efa704e336d70d6a": "196ff1418acbf4d5c61e1ae83f9ad01c",
".git/objects/07/98ded1f01206ded852e33d50bf8d54b4138f6d": "1d859c2585f3685606742cde98a47292",
".git/objects/91/e0726dbb7b027cf642978065b1edca9b892fda": "916b8b49af23c3907b3c55094576da9d",
".git/objects/65/25579d8bb129d266b6b74f53717309b3eb5666": "dc26f83038246d85007760d2000a7724",
".git/objects/30/1963a6a3161ffba40c0d31495e32790ff7cd7c": "9ee48cc289bd2f58f5f1b9a19ba5615d",
".git/objects/37/195bff772e89c5f6ca3e645869555641e31a5b": "a32557b5e65c2725158dff49fef0c333",
".git/objects/08/8fa8f1c76b00a55922738ed24e82840e6095e2": "1f9f1e6590c3d74816a5d583ba29202d",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/6c/78d949b618ae241218a2dd3e6e8aa54843e36a": "14029cfd2048da22ecb3f72aaaa97a4e",
".git/objects/39/1ec743673d92f922f5d9a9d91a12bfc44219e5": "0dd3e2e443ce37fcc4b95979e108a7e9",
".git/objects/99/dc6403b33ace975a643499304c6ce21fa3ba61": "d7247a4cd84023fbc7d189543f19549f",
".git/objects/90/2f3b011da2bd14d17a76becccee44c21d2b9fa": "36411b510b69b59595c0ac6a6936ff6a",
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
".git/objects/e6/55b2cdb91d232ee05ee2ff9bd9e46d7d2b0eaa": "7167382ca6df16d905cb973eddfb7a52",
".git/objects/f0/0ebc20fc579697c827ab4cc07931647c593f93": "a8c87ab17cb703a3a87224eb49168ea4",
".git/objects/fa/1b65ac4b7bc2fc6dcfcccfd91d12a60818da30": "7e212439ac076fcb3cc2b0d990061dc2",
".git/objects/fa/8bccbef1950eeacd6c02848c04072270b29b51": "967a5aba3ead12ad8c0fe62019c3cd05",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/e7/c5e2c5c0c4cce1db87b9016940a6db5db33392": "802ff6b6bd80c2ca1fdae2b67942621e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e4aec9b6d39bc49d384a101716b70bc4266bf4": "1b6970078a74ada40489126bee0da482",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/6d3371b8ea6ea8210b4dfd6492dbbf85461579": "34720e28e87cd170b57eb467e1f8e6f0",
".git/objects/23/52d61aadfd9e4420065e7606992bc44845c406": "23ec958af2834bd997cf99886d773dbc",
".git/objects/12/0628890942fd5db86dd10c1b720d22252f8f48": "f7461e06131464403ada61bc32edf439",
".git/objects/85/4a7d14ca81e9121c54e4662bc99220e2918c08": "2c187b5da2053387ae04b14e9028b3e9",
".git/objects/71/458fb36e9db2504d68a35129379863a0ecc4ad": "042b8a9c0d4f3afeb58d6887b8420f50",
".git/objects/14/73a5c1ffbfe83ed31d8dfc6a2898a05644c1a3": "3693543713b4b258a884f695046fa511",
".git/objects/14/179fae7f1d3ca6a43a03124b8ac1f6b5773f3e": "4510243a24bc4a399c295a6b468c94f9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f90dc7361d6f22ccc59ca1a34815da9b",
".git/logs/refs/heads/main": "c9f76cd84aa53e40dc696ad3d52fb5a4",
".git/logs/refs/remotes/origin/main": "add29c9350d86d0df877141729a02501",
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
".git/refs/heads/main": "40c9e38a7a15cb18824b3165ed65fd3f",
".git/refs/remotes/origin/main": "40c9e38a7a15cb18824b3165ed65fd3f",
".git/index": "d5acf0d20651082aa07d7d8d4541035c",
".git/COMMIT_EDITMSG": "54aa0151f417c977e881a2de7baad576",
".git/FETCH_HEAD": "af36aba919fa2c4e9725fe5b49e30fa2",
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
