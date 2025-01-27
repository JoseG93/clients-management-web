import Button from "./Button";

export default function ConfirmationModal({ open, message, onCancel, onConfirm }) {
    return (
        <dialog open={open} className="p-4 rounded-md shadow-md animate-bounce">
            <div className="p-2 mb-4 text-center text-xl">{message}</div>
            <div className="flex gap-4 justify-center">
                <Button role="danger" onClick={onCancel}>Cancelar</Button>
                <Button role="outline" onClick={onConfirm}>Confirmar</Button>
            </div>
        </dialog>
    );
}