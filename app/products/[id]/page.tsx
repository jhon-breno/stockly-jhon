interface Params {
    id: string;
}

const ProductDateilsPage = ({params: {id}}: {params: Params}) => {
    return ( <h1>Product ID: {id}</h1> );
}
 
export default ProductDateilsPage;