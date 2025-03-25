// src/pages/GalleryPage.jsx
import React, { useState, useEffect } from 'react';
import { Image, X, Album, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import { withSiteContent } from '../components/withSiteContent';
import pillar7image from '/src/assets/pillar7.jpg';

const GalleryPage = ({ content }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [albumsDropdownOpen, setAlbumsDropdownOpen] = useState(false);

    useEffect(() => {
        // Simulate fetching data
        fetchMockData();
    }, []);

    const fetchMockData = () => {
        setLoading(true);

        // Simulate API delay
        setTimeout(() => {
            // Mock albums data
            const mockAlbums = [
                { id: '1', title: 'Rush Week 2024', coverPhotoUrl: pillar7image, mediaItemsCount: 15 },
                { id: '2', title: 'Leadership Retreat', coverPhotoUrl: 'https://via.placeholder.com/400x300?text=Leadership+Retreat', mediaItemsCount: 28 },
                { id: '3', title: 'Formal Dinner', coverPhotoUrl: 'https://via.placeholder.com/400x300?text=Formal+Dinner', mediaItemsCount: 36 },
                { id: '4', title: 'Alumni Networking', coverPhotoUrl: 'https://via.placeholder.com/400x300?text=Alumni+Networking', mediaItemsCount: 20 },
            ];

            setAlbums(mockAlbums);

            // Set default album
            setSelectedAlbum(mockAlbums[0]);

            // Load photos for the first album
            loadAlbumPhotos(mockAlbums[0]);

            setLoading(false);
        }, 1000);
    };

    const loadAlbumPhotos = (album) => {
        setLoading(true);
        setSelectedAlbum(album);

        // Simulate API delay
        setTimeout(() => {
            // Generate more photos for this album
            const mockPhotos = Array.from({ length: album.mediaItemsCount }, (_, i) => ({
                id: `${album.id}-${i + 1}`,
                title: `${album.title} Photo ${i + 1}`,
                date: new Date(2024, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28) + 1)
                    .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                url: `https://via.placeholder.com/800x600?text=${album.title}+${i + 1}`,
                thumbnail: `https://via.placeholder.com/400x300?text=${album.title}+${i + 1}`
            }));

            setPhotos(mockPhotos);
            setAlbumsDropdownOpen(false);
            setLoading(false);
        }, 800);
    };

    const openPhotoModal = (photo) => {
        setSelectedPhoto(photo);
        document.body.style.overflow = 'hidden';
    };

    const closePhotoModal = () => {
        setSelectedPhoto(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header alwaysShowBackground={true} />

            {/* Main Content */}
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12 max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                            <Image className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-medium text-emerald-600">Photo Gallery</span>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Delta Omicron Zeta Memories
                        </h1>
                        <p className="text-xl text-gray-600">
                            Explore our collection of memories and experiences from chapter events.
                        </p>
                    </div>

                    {/* Album Selector */}
                    {albums.length > 0 && (
                        <div className="max-w-xs mx-auto mb-8 relative">
                            <div
                                className="bg-white p-3 rounded-lg shadow-md flex items-center justify-between cursor-pointer border border-gray-200"
                                onClick={() => setAlbumsDropdownOpen(!albumsDropdownOpen)}
                            >
                                <div className="flex items-center gap-2">
                                    <Album className="w-5 h-5 text-emerald-600" />
                                    <span className="font-medium text-gray-800 truncate">
                                        {selectedAlbum ? selectedAlbum.title : 'Select Album'}
                                    </span>
                                </div>
                                {albumsDropdownOpen ? (
                                    <ChevronUp className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
                                )}
                            </div>

                            {albumsDropdownOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-64 overflow-y-auto">
                                    {albums.map((album) => (
                                        <div
                                            key={album.id}
                                            className={`p-3 hover:bg-emerald-50 cursor-pointer flex items-center gap-2 ${selectedAlbum && selectedAlbum.id === album.id ? 'bg-emerald-50' : ''
                                                }`}
                                            onClick={() => loadAlbumPhotos(album)}
                                        >
                                            <div
                                                className="w-8 h-8 rounded overflow-hidden bg-gray-100 flex-shrink-0"
                                                style={{
                                                    backgroundImage: `url(${album.coverPhotoUrl})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}
                                            />
                                            <div>
                                                <div className="font-medium text-gray-800 truncate">{album.title}</div>
                                                <div className="text-xs text-gray-500">{album.mediaItemsCount} photos</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center items-center my-24">
                            <div className="loading-dots scale-150">
                                <div style={{ '--dot-index': 0 }}></div>
                                <div style={{ '--dot-index': 1 }}></div>
                                <div style={{ '--dot-index': 2 }}></div>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="max-w-md mx-auto mt-8 p-4 bg-red-50 text-red-700 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    {/* Photo Grid */}
                    {!loading && photos.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {photos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 card-shadow"
                                    onClick={() => openPhotoModal(photo)}
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={photo.thumbnail}
                                            alt={photo.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 w-full">
                                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/90 text-white text-xs rounded-full">
                                                    <Image className="w-3 h-3" />
                                                    View Photo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{photo.title}</h3>
                                        <p className="text-sm text-gray-600">{photo.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && photos.length === 0 && !error && (
                        <div className="text-center my-24">
                            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <Image className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-700 mb-2">No Photos Available</h3>
                            <p className="text-gray-500">There are no photos in this album yet.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Photo Modal */}
            {selectedPhoto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closePhotoModal}>
                    <div
                        className="max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-semibold text-gray-800">{selectedPhoto.title}</h3>
                            <button
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={closePhotoModal}
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                        <div className="bg-gray-100 flex items-center justify-center">
                            <img
                                src={selectedPhoto.url}
                                alt={selectedPhoto.title}
                                className="max-h-[70vh] object-contain"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <p className="text-gray-600">{selectedPhoto.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default withSiteContent(GalleryPage);