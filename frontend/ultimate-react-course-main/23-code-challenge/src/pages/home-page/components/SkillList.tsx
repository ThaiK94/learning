import type { User } from "../../../types/user";

export function SkillList({ spongeBob }: { spongeBob: User }) {
  return (
    <ul>
      {spongeBob.skillList.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
