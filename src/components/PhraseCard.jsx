import "./PhraseCard.css"

const PhraseCard = ({ phrase, handleChangePhrase }) => {

  return (
    <section className="phraseCard">

      <article className="phraseCard__container">
        <h1 className="phraseCard__title">Infogalax</h1>

        <p className="phraseCard__phrase"> {phrase.phrase} </p>

        <button className="phraseCard__btn" onClick={handleChangePhrase}>New Phrase</button>

      </article>

      <footer className="phraseCard__footer">
        Author: {phrase.author}
      </footer>

    </section>
  );
};
export default PhraseCard;
