import type { User } from "../../../types/user";

export function Avatar({spongeBob} : {spongeBob: User}) {
  return (
    <div className="avatar">
      <img src={spongeBob.image} alt="Avatar" />
    </div>
  );
}
