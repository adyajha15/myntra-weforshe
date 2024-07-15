document.addEventListener('DOMContentLoaded', function() {
    var canvas = new fabric.Canvas('canvas');
    
    document.getElementById('addRect').addEventListener('click', function() {
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: document.getElementById('colorPicker').value,
            width: 50,
            height: 50
        });
        canvas.add(rect);
    });

    document.getElementById('addCircle').addEventListener('click', function() {
        var circle = new fabric.Circle({
            left: 100,
            top: 100,
            fill: document.getElementById('colorPicker').value,
            radius: 25
        });
        canvas.add(circle);
    });

    document.getElementById('removeSelected').addEventListener('click', function() {
        canvas.remove(canvas.getActiveObject());
    });

    document.getElementById('saveDesign').addEventListener('click', function() {
        var dataURL = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'design.png';
        link.click();
    });

    document.getElementById('imageUpload').addEventListener('change', function(e) {
        var files = e.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function(f) {
                var data = f.target.result;
                fabric.Image.fromURL(data, function(img) {
                    canvas.add(img);
                });
            };
            reader.readAsDataURL(file);
        }
    });
});
