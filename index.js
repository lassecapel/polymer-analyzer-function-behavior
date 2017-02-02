const Analyzer = require('polymer-analyzer').Analyzer;
const FSUrlLoader = require('polymer-analyzer/lib/url-loader/fs-url-loader').FSUrlLoader;
const PackageUrlResolver = require('polymer-analyzer/lib/url-loader/package-url-resolver').PackageUrlResolver;
const expect = require('expect');

let analyzer = new Analyzer({
  urlLoader: new FSUrlLoader('./'),
  urlResolver: new PackageUrlResolver(),
});

analyzer.analyze('my-element.html')
  .then((document) => {
    const behaviors = Array.from(document.getByKind('behavior'));
    expect(behaviors.length).toBe(2, 'expected two behaviors to be defined');
    console.log('behaviors -->', behaviors);
    process.exit();
  }).catch((e) => {
    console.log(e); // "oh, no!"
    process.exit();
  })