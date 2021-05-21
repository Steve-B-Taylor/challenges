package com.launchacademy.marathon.services;


import com.launchacademy.marathon.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongService {
  private final SongRepository songRepository;
  private final SongMapper songMapper;

  @Autowired
  public SongService(SongRepository songRepository, SongMapper urlMapper) {
    this.urlRepository = songRepository;
    this.urlMapper = urlMapper;
  }

  public Page<UrlDto> findAll(Pageable pageable) {
    Page<Url> page = urlRepository.findAll(pageable);
    return new PageImpl<UrlDto>(urlMapper.urlsToUrlDtos(page.getContent()), pageable, page.getTotalElements());
  }
}