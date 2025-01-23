import { useNavigation } from "react-router-dom";

export default function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button type="submit" className="btn btn-primary btn-block">
      {isSubmitting ? (
        <span className="loading loading-spinner">sending...</span>
      ) : (
        text || "submit"
      )}
    </button>
  );
}
