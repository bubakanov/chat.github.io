<link type="text/css" rel="stylesheet" href="https://bubakanov01.bugfocus.com/clientweb/chat-client-v4/css/form.css">
<script type="text/javascript">
    SERVICE_PATTERN_CHAT_CONFIG = {
        appId: 'b1a2ba80-a912-444d-97e8-dee9a78c75ac',
        apiUrl: 'https://bubakanov01.bugfocus.com/clientweb/api/v1',
        tenantUrl: 'example.com',
        chatPath: 'https://bubakanov01.bugfocus.com/clientweb/chat-client-v4/'
    };
</script>
<script src="https://bubakanov01.bugfocus.com/clientweb/chat-client-v4/js/init.js"></script> 
<button class="js-opens-chat">Chat</button>
<script type="text/javascript">
  ;(function() {
    var targetSelector = '.js-opens-chat';
    var targets = document.querySelectorAll(targetSelector);
    [].forEach.call(targets, function(target)
 {
      target.addEventListener('click', function(e) {
        e.preventDefault();
        var widget = document.querySelector('#sp-chat-widget')
        widget && widget.click();
      });
    });
  })();
</script>
