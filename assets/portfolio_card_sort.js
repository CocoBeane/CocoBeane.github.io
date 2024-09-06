$( document ).ready(function() {

    $(".tag").click(function() {
        event.preventDefault();

        if (this.text == "Show All"){
            showCards = showCards($(".portfolio_item"));
        } else {
            var sortedCards = sortCardsByTag(this.text);
            console.log(sortedCards);

            if (sortedCards.show.size > 0) {
                showCards(sortedCards.show);
            }
            if (sortedCards.hide.size > 0) {
                hideCards(sortedCards.hide);
            }
        }
    })

    var sortCardsByTag = function(tagName) {
        var sorted = {show:[], hide:[]}
        $(".portfolio_item").each(function(i) {
            if (itemHasTag(this.dataset.tags.split(','), tagName) == true){
                sorted.show.push(this);
            } else {
                sorted.hide.push(this);
            }
        });
        return sorted
    };

    var itemHasTag = function(tags, tagName) {
        $.each(tags, function( index, value ) {
            if (value == tagName){
                return true;
            } else {
                return false;
            }
        })
    }

    var showCards = function(cardsToShow) {
        $.each(cardsToShow, function( index, value ) {
            value.show();
        })
    };

    var hideCards = function(cardsToHide) {
        $.each(cardsToShow, function( index, value ) {
            value.hide();
        })
    };
});
        