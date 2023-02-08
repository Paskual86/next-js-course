import { Products } from '@/Models/Products';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import dataFile from '../data/dummy-backend.json';

const ProductDetail = (props: {product: Products } ) => {
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
    return {
      props: {
        product,
      }     
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [
        {
          params: {
            pid: 'p1'
          },
        },
        {
          params: {
            pid: 'p2'
          }
        },
        {
          params: {
            pid: 'p3'
          }
        }
      ],
      fallback: false
    }
  }


export default ProductDetail;