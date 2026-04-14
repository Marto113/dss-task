import { ToastItem } from './ToastItem';

type Toast = {
  id: number;
  message: string;
  type?: 'complete' | 'undo';
};

type Props = {
  toasts: Toast[];
};

export const ToastList = ({ toasts }: Props) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  );
};
