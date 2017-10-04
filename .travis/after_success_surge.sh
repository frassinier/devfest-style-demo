echo "DEPLOY"
cd "$TRAVIS_BUILD_DIR"
if [ "$TRAVIS_PULL_REQUEST" == 'false' ] && [ "$TRAVIS_BRANCH" == 'master' ]; then
	surge --project dist --domain "devfest-style-demo.surge.sh"
	echo "✓ Deploy to devfest-style-demo.surge.sh"
else
    echo "✓ Nothing to publish to surge"
fi
cd "$TRAVIS_BUILD_DIR"