export function Person({ person }) {
  let partnerInfo;

  if (!person.isMarried) {
    partnerInfo = 'I am not married';
  } else if (person.sex === 'm') {
    partnerInfo = `${person.partnerName} is my wife`;
  } else {
    partnerInfo = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
}
