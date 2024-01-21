from pytube import Search

class YouTubeSearcher:
    def __init__(self, search_term):
        self.search_term = search_term

    def search(self):
        s = Search(self.search_term)
        return s.results