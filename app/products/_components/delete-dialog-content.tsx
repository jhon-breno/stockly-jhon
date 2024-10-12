import { DeleteProduct } from "@/app/_actions/product/delete-product";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteProductDialogContentProps {
  productId: string;
}

const DeleteProductDialogContent = ({
  productId,
}: DeleteProductDialogContentProps) => {
  const handleContinueClick = async () => {
    try {
      await DeleteProduct({ id: productId });
      toast.success("Produto excluído com Sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir produto.");
    }
  };
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Você está prestes a deletar um produto do estoque.
        </AlertDialogTitle>
        <AlertDialogDescription className="text-red-800">
          Atencão! Essa ação é irreversível. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteProductDialogContent;
