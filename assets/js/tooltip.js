function value() {
    var tooltip_holder = $("#autotooltip");
    tooltip_holder.append(document.createElement("hr"));
    
    $("a[data-tooltip]").each(function(index, value){
        var link = $(this);
        
        var tooltip = link.attr("data-tooltip");
        var id = link.attr("href");
        var href = link.attr('id');

        link = $(document.createElement("a"));
        link.attr("id", id.substring(1));
        link.attr("href", "#" + href);
        link.text((index + 1) + ". ");

        var text = $(document.createElement("span")).text(tooltip);
        var wrapper = $(document.createElement("small")).append(link).append(text);

        tooltip_holder.append(wrapper);
    });
}

value();