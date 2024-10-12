import { DataTable } from "../_components/ui/data-table";
import { productsTableColumns } from "./_components/table-columns";
import { caschedGetProducts } from "../_data-acess/product/get-product";
import AddProductButton from "./_components/add-product-button";

export const dynamic = "force-dynamic";

const ProductPage = async () => {
  const products = await caschedGetProducts();
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <AddProductButton />
      </div>
      <DataTable columns={productsTableColumns} data={products} />
    </div>
  );
};

export default ProductPage;
