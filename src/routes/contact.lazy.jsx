import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import postContact from "../api/postContact";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        <form action={mutation.mutate}>
          <Input type="text" name="name" placeholder="Name" />
          <Input name="email" placeholder="Email" type="email" />
          <TextArea name="message" placeholder="Message"></TextArea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}


