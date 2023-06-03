<script>
        function ac() {
            document.getElementById("t1").value = "";
        }

        function show(input) {
            document.getElementById("t1").value += input;
        }

        function calc() {
            var op = eval(document.getElementById("t1").value);
            document.getElementById("t1").value = op;
        }
    </script>
