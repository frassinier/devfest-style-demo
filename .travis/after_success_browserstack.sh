echo "BROWSERSTACK"
cd "$TRAVIS_BUILD_DIR"
if [ "$TRAVIS_PULL_REQUEST" != 'false' ]; then
    yarn run test:browserstack
    echo "✓ Test PR#$TRAVIS_PULL_REQUEST on BrowserStack"
else
    echo "✓ Nothing to test on master branch"
fi
cd "$TRAVIS_BUILD_DIR"