function autotooltip() {
    var tooltip_holder = $("#autotooltip");
    tooltip_holder.append(document.createElement("hr"));

    $("span.autotooltip").each(function(index, value){
        var span = $(this);

        var foot_link = $(document.createElement("a"));
        var ind = index + 1;
        foot_link.text("[" + ind + "]");

        var tooltip = span.attr("data-tooltip");
        var id = span.text();
        foot_link.attr("href", "#" + id);
        foot_link.attr("id", "autotooltip-" + ind);
        span.append($(document.createElement("sup")).append(foot_link));

        var link = $(document.createElement("a"));
        link.attr("id", id);
        link.attr("href", "#" + "autotooltip-" + ind);
        link.text(ind + ". ");

        var text = $(document.createElement("span")).text(tooltip);
        var wrapper = $(document.createElement("small")).append(link).append(text);

        tooltip_holder.append(wrapper);
    });
}
autotooltip();