backends=( backend )


generate_backend() {
    npx openapi-typescript-codegen --input ../src/lib/backend_adapter/specs.json --output ../src/lib/backend_adapter/$1/generated --name $1
}

for i in "${backends[@]}"
do
    generate_backend "$i"
done
