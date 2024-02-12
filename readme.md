<div class="code-container">
  <button class="copy-btn" data-clipboard-target="#your-code-block-id">Copy</button>
  <pre id="your-code-block-id">
    <code class="language-javascript">
      // This is a JavaScript code block
      function greet() {
        console.log("Hello, World!");
      }

      function communicate(){
        console.log("How are you?");
      }
    </code>
  </pre>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    new ClipboardJS('.copy-btn');
  });
</script>

<style>
  .code-container {
    position: relative;
  }

  .copy-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
