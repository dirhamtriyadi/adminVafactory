import {
  images404,
  selectorUtility,
  reduxForm,
  useSelector,
  React,
  Skeleton,
} from "../../../../components";

let ModalFoto = () => {
  const isLoading = useSelector(selectorUtility.isLoading);
  const data = useSelector(selectorUtility.getDataEdit);
  return (
    <div>
      {isLoading ? (
        <Skeleton width={468} height={245} />
      ) : (
        <img
          src={data.foto || images404}
          alt="img"
          height="245px"
          width="468px"
        />
      )}
    </div>
  );
};

ModalFoto = reduxForm({
  form: "ModalFoto",
  enableReinitialize: true,
})(ModalFoto);
export default ModalFoto;
