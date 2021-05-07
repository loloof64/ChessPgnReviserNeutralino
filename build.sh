# Requires yarn and @vue/cli to be installed

yarn vue-cli-service build

if [[ -d resources ]]
then
    rm -Rf resources
fi

mkdir resources
cp -r build/* resources/

neu build