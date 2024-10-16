import { createClient } from "@/utils/supabase/server"

const ProductsPage = async () => {

  const serverClient = createClient();
  const { data: supabaseData } = await serverClient.from("product").select();

  if(!supabaseData) return <div>제품이 없습니다.</div>;

  return (
    <>
      {
        supabaseData?.map(product => {
          return (
            <>
            <div key={product.id}>
              <p>{product.id}</p>
              <p>제품명: {product.title}</p>
              <p>제품설명: {product.description}</p>
            </div>            
            <hr/>
            </>
          )
        })
      }
    </>
  )
}

export default ProductsPage


