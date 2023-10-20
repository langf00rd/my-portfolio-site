import { JobExperience } from "~/interface";

export default function JobExperienceCard(props: { data: JobExperience }): JSX.Element {
  return (
    <li className="pb-5 mb-5 grid gap-2">
      <div>
        <h2>{props.data.companyName}</h2>
        <h2>{props.data.jobTitle}</h2>
      </div>
      <p className="text-textGrey">{props.data.years}</p>
    </li>
  );
}
