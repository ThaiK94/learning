import type { User } from "../../../types/user";

export function SkillList({ spongeBob }: { spongeBob: User }) {
  return (
    <ul className="skill-list">
      {spongeBob.skillList.map((skill) => (
        <li className = "skill"key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
