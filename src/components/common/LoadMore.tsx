type Props = {
    visible: number,
    total: number,
    onLoadMore: () => void
}

export function LoadMore({ visible, total, onLoadMore }: Props) {
    if (visible >= total) return null

    return (
        <button 
            className="todos__list--load-more" 
            onClick={onLoadMore}>Load More
        </button>
    )
}