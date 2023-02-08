import { Products } from '@/Models/Products';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import dataFile from '../data/dummy-backend.json';

const ProductDetail = (props: {product: Products } ) => {
    
    if (!props.product) {
      return <p>Loading</p>
    }
    return(<>
        <h1>{props.product.title}</h1>
        <p>{props.product.description}</p>
    </>)
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    
    const data = dataFile;
    const { params } = context;
    const productId = params!.pid;    
    const product = data.products.find(product => product.id === productId);
    // Not found page in the case that the id not exists
    if (!product) {
      return {
        notFound:true
      }
    }

    return {
      props: {
        product,
      }     
    }
  }

  export async function getStaticPaths() {
    const data = dataFile;
    const productIds = data.products.map(product => product.id);
    const pathsWithParams = productIds.map(id => ({params: {pid:id}}));

    return {
      paths: [
        {
          params: pathsWithParams,
        }
      ],
      fallback: true
    }
  }


export default ProductDetail;