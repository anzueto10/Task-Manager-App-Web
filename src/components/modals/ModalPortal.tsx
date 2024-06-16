interface Props {
  children: React.ReactNode;
}

const ModalPortal: React.FC<Props> = ({ children }) => {
  return <div className="modal-root">{children}</div>;
};

export default ModalPortal;
