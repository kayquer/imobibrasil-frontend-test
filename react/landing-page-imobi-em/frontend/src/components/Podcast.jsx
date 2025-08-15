import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Play, ExternalLink } from 'lucide-react';
import { mockData } from './mock';

const Podcast = () => {
  const { podcast } = mockData;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#109d59]/10 text-[#109d59] border-[#109d59]/20">
            Conteúdo Exclusivo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {podcast.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {podcast.subtitle}
          </p>
        </div>

        {/* Episodes Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {podcast.episodes.map((episode) => (
            <Card 
              key={episode.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white"
            >
              <CardContent className="p-0">
                
                {/* Episode Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={episode.thumbnail} 
                    alt={episode.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/250";
                    }}
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#109d59] rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* YouTube Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white border-0 flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      YouTube
                    </Badge>
                  </div>
                </div>

                {/* Episode Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#109d59] transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {episode.description}
                  </p>
                  
                  {/* Listen Button */}
                  <button 
                    onClick={() => window.open(episode.url, '_blank')}
                    className="inline-flex items-center space-x-2 text-[#109d59] hover:text-[#0e8c4f] font-medium text-sm transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <Play className="w-4 h-4" />
                    <span>Assistir Episódio</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-[#109d59] to-[#0e8c4f] rounded-2xl p-8 text-white shadow-xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                Quer mais conteúdo?
              </h3>
              <p className="text-white/90">
                Acesse nosso canal no YouTube e fique por dentro das novidades do mercado imobiliário
              </p>
            </div>
            <button 
              onClick={() => window.open('https://www.youtube.com/imobibrasilbr', '_blank')}
              className="bg-white text-[#109d59] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2 whitespace-nowrap"
            >
              <Play className="w-4 h-4" />
              <span>Ver Canal</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Podcast;