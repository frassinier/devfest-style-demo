#!/usr/bin/env bash

echo "GITHUB"
if [ -n "$GH_TOKEN" ]; then
	echo "✓ GH Token is here"
	cd "$TRAVIS_BUILD_DIR"
	echo "✓ Move to Travis build dir"
	if [ "$TRAVIS_PULL_REQUEST" != 'false' ]; then
	    git fetch origin $TRAVIS_PULL_REQUEST_BRANCH:$TRAVIS_PULL_REQUEST_BRANCH --depth 1
		git checkout $TRAVIS_PULL_REQUEST_BRANCH
		echo "✓ Checkout $TRAVIS_PULL_REQUEST_BRANCH"
		git add test/screenshots
		git -c user.name="travis" -c user.email="travis" commit -m "CI - update screenshots"
		echo "✓ Commit updated screenshots to $TRAVIS_PULL_REQUEST_BRANCH"

		git push -q https://build-travis-ci:$GH_TOKEN@github.com/frassinier/devfest-style-demo $TRAVIS_PULL_REQUEST_BRANCH
		echo "✓ Push to $TRAVIS_PULL_REQUEST_BRANCH"
	fi
	cd "$TRAVIS_BUILD_DIR"
fi