const urls = [
    {
        "input": "https://cdn.shopify.com/e.jpg?v=15",
        "size": "100x"
    },
    {
        "input": "https://cdn.shopify.com/e_100x200.jpg?v=15",
        "size": "x200"
    },
    {
        "input": "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
        "size": "100x"
    },
    {
        "input": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
        "size": "x100"
    },
    {
        "input": "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
        "size": "100x200"
    }
]
const regex = /_(\d+x|\dx|\d+x\d+)\./g;
const regexFileName = /\/([^\/?#]+)[^\/]*$/;

const replaceSize = (urls) => {
    return urls.map(({input, size}) => {
        const match = input.match(regexFileName);
        const matchSize = match[0].match(regex)
        let replacedStr = '';
        if (matchSize) {
            replacedStr = match[0].replace(regex, `_${size}.`);
        } else {
            replacedStr = match[0].replace('.jpg', `_${size}.jpg` )
        }
        return {
            input: input,
            output: input.replace(regexFileName, replacedStr),
            size: size
        }
    });
}

const output = replaceSize(urls);
let tests = [
    {
        "input": "https://cdn.shopify.com/e.jpg?v=15",
        "output": "https://cdn.shopify.com/e_100x.jpg?v=15",
        "size": "100x"
    },
    {
        "input": "https://cdn.shopify.com/e_100x200.jpg?v=15",
        "output": "https://cdn.shopify.com/e_x200.jpg?v=15",
        "size": "x200"
    },
    {
        "input": "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
        "output": "https://cdn.shopify.com/e-jpg_100x.jpg?v=15",
        "size": "100x"
    },
    {
        "input": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
        "output": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
        "size": "x100"
    },
    {
        "input": "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
        "output": "https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
        "size": "100x200"
    }
]
console.log(output)
console.log(JSON.stringify(output) == JSON.stringify(tests));
