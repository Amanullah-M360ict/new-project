import urllib.request
import re
import json
import sys
import codecs

sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

url = "https://www.youtube.com/@m360ict/videos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'var ytInitialData = ({.*?});</script>', html)
    if match:
        data = json.loads(match.group(1))
        videos = []
        seen = set()
        def extract(obj):
            if isinstance(obj, dict):
                if 'videoId' in obj and 'title' in obj and 'runs' in obj['title']:
                    vid = obj['videoId']
                    if vid not in seen:
                        title = "".join([x['text'] for x in obj['title']['runs']])
                        videos.append({"videoId": vid, "title": title})
                        seen.add(vid)
                for v in obj.values():
                    extract(v)
            elif isinstance(obj, list):
                for v in obj:
                    extract(v)
        
        extract(data)
        # the extraction might get unrelated videoIds, let's filter those that are likely the channel's
        # usually they are under richItemRenderer -> content -> videoRenderer
        for v in videos[:50]: # limit to a reasonable number
            print(f"{v['videoId']}|{v['title']}")
except Exception as e:
    print(str(e))
