type Props = {
  message: string;
  type?: 'complete' | 'undo';
};

export const ToastItem = ({ message, type = 'complete' }: Props) => {
  return (
    <div className={`toast ${type ? `toast--${type}` : ''}`}>
      <p className="toast__message">{message}</p>
    </div>
  );
};
