function BookCover({book}) {
    return (
        <div className={`book-cover-area book-cover-area-${book.cover}`} aria-hidden="true">
            <div className="book-cover">
                <span>{book.author}</span>
                <strong>{book.title}</strong>
            </div>
        </div>
    );
}

export default BookCover;
