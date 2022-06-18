import styles from "./styles.module.scss";
import { Helmet } from "react-helmet";
import { ExerciseHeader } from "../../components/ExerciseHeader";
import { ModalProvider } from "../../contexts/modal";

export const Test = () => (
  <>
    <Helmet>
      <title>TESTE</title>
    </Helmet>
    <ModalProvider>
      <ExerciseHeader />
    </ModalProvider>
  </>
);