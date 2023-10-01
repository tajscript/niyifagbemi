import LoaderStyles from "../app/styles/loader.module.css"

const loader = () => {
  return (
    <div className={LoaderStyles.loader}>
        <div className={LoaderStyles.loader__wrapper}>
        <h2 className={LoaderStyles.loader__text}>NIYI <br /> FAGBEMI</h2>
        <h4 className={LoaderStyles.loader__counter}>Loading...</h4>
        </div>
    </div>
  )
}

export default loader